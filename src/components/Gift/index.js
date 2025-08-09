import React, { useState } from "react";
import styles from "./Gift.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import arg from "../../Images/arg.jpg";
import br from "../../Images/br.jpg";
import dreams from "../../Images/dreams.jpg";
import marco from "../../Images/marco.jpg";
import aves from "../../Images/aves.jpg";
import ingressos from "../../Images/ingressos.jpg";
import roda from "../../Images/roda.jpg";
import apple from "../../Images/apple.jpg";
import suv from "../../Images/suv.jpg";


function Gift() {
    const cards = [
        {
            img: br,
            title: "Cataratas do Iguaçu - lado brasileiro",
            desc: "Prepare a câmera (e a capa de chuva)! Aqui você vai ver as quedas d’água de pertinho e sentir toda a força da natureza."
        },
        {
            img: arg,
            title: "Cataratas do Iguaçu - lado argentino",
            desc: "Se no Brasil você vê, na Argentina você se joga na imersão! Trilhas, mirantes e a famosa Garganta do Diabo te esperam."
        },
        {
            img: marco,
            title: "Marco das Três Fronteiras",
            desc: "Um pezinho no Brasil, outro na Argentina e o olhar no Paraguai. Tudo isso com um pôr do sol de arrepiar!"
        },
        {
            img: roda,
            title: "Roda Gigante - Iguaçu",
            desc: "Suba, respire fundo e aproveite a vista panorâmica mais incrível da cidade (vale até um post no Instagram)."
        },
        {
            img: apple,
            title: "Gastar 2000$ para os filhos",
            desc: "Seus filhos merecem! Você poderá comprar produtos apple até 2000 doláres para seus filhos."
        },
        {
            img: aves,
            title: "Parque das Aves",
            desc: "Um paraíso colorido com araras, tucanos e até flamingos. Aqui, as aves voam (quase) na sua cara!"
        },
        {
            img: ingressos,
            title: "Ingressos - Cataratas Iguaçu BR",
            desc: "Seu passaporte para um espetáculo da natureza! Sem ele, nada de passarelas e quedas d’água."
        },
        {
            img: suv,
            title: "Presentes para os filhos",
            desc: "Seus filhos merecem! Comprem presentes para eles sem receber 1 centavo!"
        },
        {
            img: dreams,
            title: "Dreams Park Show",
            desc: "Museu de Cera, Vale dos Dinossauros e muito mais. Aqui, até o T-Rex vai querer tirar selfie com você!"
        }
    ];


    return (
        <div className={`container ${styles.approaches}`} id="gift">
            <section className={`${styles.section}`}>
                <div className={`${styles.introduction}`}>
                    <p className={`${styles.title}`}>Seu Próximo Destino...</p>
                    <span className={styles.description}>
                        Sabemos que o seu próximo destino é <b>Foz do Iguaçu.</b>
                        <br/>
                        E para deixar essa viagem ainda mais especial, temos um presente para você e para a mamãe: <b>dois passeios inesquecíveis!</b>
                        <br /><br />
                        Mas calma… não vai ser tão simples assim 
                        <br /><br />
                        O primeiro passeio será conquistado girando a <b>Roleta Premiada</b> - a sorte vai decidir qual será a sua aventura!
                        <br />
                        Já o segundo… aí sim, será <b>vocês que vão escolher</b>
                        <br /><br /><br /><br />
                        <h4>Veja as opções:</h4>
                    </span>
                </div>

                <div className={`d-flex justify-content-between align-items-start mb-5 flex-wrap ${styles.card}`}>
                    {cards.map((card, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 ${styles.theme} animate-on-visible`}>
                            <div className={styles.content}>
                                <div className={styles.icon}>
                                    <img src={card.img} alt={card.title} className={styles.iconCard} />
                                    <p className={styles.title}>{card.title}</p>
                                </div>
                                <p className={styles.description}>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Gift;