import React, { useState, useEffect } from "react";
import styles from "./Game.module.css";

export default function AnimatedRandomPicker() {
    const options = [
        "Passeio nas Cataratas - BR",
        "Passeio nas Cataratas - ARG",
        "Parque das Aves",
        "Roda Gigante",
        "Dreams Park Show",
        "Ingresso Cataratas - BR",
        "Marco das Três Fronteiras"
    ];

    const [current, setCurrent] = useState("");
    const [rolling, setRolling] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [showModal, setShowModal] = useState(false);

    function startRoll() {
        if (rolling) return;
        setShowModal(true);
        setCountdown(3);
        setRolling(true);
    }


    useEffect(() => {
        if (countdown === null) return;

        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setShowModal(false);
            rollOptions();
        }
    }, [countdown]);


    function rollOptions() {
        let index = 0;
        const interval = setInterval(() => {
            setCurrent(options[index]);
            index = (index + 1) % options.length;
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            const randomOption = options[Math.floor(Math.random() * options.length)];
            setCurrent(randomOption);
            setRolling(false);
            setCountdown(null);
        }, 4000);
    }

    return (
        <div className={`container text-center py-5`} id="presente">
            <h2 className="mb-4">Descubra seu passeio</h2>

            <button
                onClick={startRoll}
                disabled={rolling}
                className="btn btn-primary px-4 py-2"
            >
                {rolling ? "Girando..." : "Sortear"}
            </button>

            <div
                className={`mt-4 p-3 border rounded mx-auto ${!rolling && current ? styles.resultFinal : ""}`}
                style={{ maxWidth: "500px", minHeight: "100px" , fontSize: "26px", alignContent: "center"}}
            >
                {current || ""}
            </div>

            <div><br/><br/>
                Agora que sorteado, vocês podem escolher o outro destino com base na lista de opções acima.
                <br/><br/>
                <br/><br/>
                <h1 className={styles.pais}>Feliz dia dos Pais</h1>
            </div>

            {showModal && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content bg-transparent border-0 text-white text-center">
                            <div className={`${styles.countdown}`}>{countdown}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}
