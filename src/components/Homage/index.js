import React, { useState } from "react";
import styles from "./Homage.module.css";
import filhos from "../../Images/filhos.png";

function Homage() {
    return (
    <div className="container py-5" id="mensagem">
        <div className="row align-items-center">            
            <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="fw-bold">Pai,</h2>
                <p>
                    É com o coração transbordando de amor e gratidão que dedicamos este presente a você.
                    Para nós, você é a própria definição de um pai presente: nosso porto seguro, nosso guia sábio
                    e o abraço mais carinhoso que conhecemos. Sua vida é um verdadeiro{" "}
                    <b>exemplo de energia inesgotável e de dedicação incondicional.</b>
                </p>

                <p>
                    Somos testemunhas diárias do quanto você se doa por nós, sempre nos incentivando, acreditando
                    em nossos sonhos e nos fortalecendo com suas orações e seu cuidado que vem de Deus. Cada sacrifício
                    que você fez por nós se transformou em alicerce para nossas vidas.
                </p>

                <p>
                    Não há palavras que expressem o quanto somos gratos pela sua vida e o quanto o admiramos.
                </p>

                <p>
                    <b>
                        Você é um pai, um homem e um ser humano incrivelmente forte, temente a Deus e cheio de propósito.
                    </b>
                </p>

                <p>
                    E por tudo isso, queremos te dar um pouco da alegria que você nos proporciona todos os dias.
                    Sabemos o quanto você ama viajar, e é com esse espírito de aventura que preparamos uma surpresa especial
                    para o seu <b>dia dos pais!</b>
                </p>
            </div>

            <div className="col-lg-6 text-center" >
                <img
                    src={filhos}
                    alt="Filhos"
                    className="img-fluid"
                />
            </div>
        </div>
    </div>
);

}

export default Homage;