import React from 'react';

import './home-page.styles.scss';

const HomePage = () => {
    let today = new Date();
    let nov13 = new Date("11/13/2021");
    let diffInTime = (nov13.getTime() - today.getTime()) / (1000*3600*24);
    let diffInDays = Math.floor(diffInTime);
    // let diffInHours = diffInTime - diffInDays
    return (
        <div className='home-page-div'>
            <h1 className='ttu tracked'>{`Jól í skókassa - ${today.getFullYear()}`}</h1>
            <div className="text-div">
                <h2>{`${diffInDays} dagar til stefnu`}</h2>
                <span>Síðasti dagur til þess að skila inn skókassa er laugardagurinn 
                13.nóvember 2021. Eftir það er ekki tekið við fleiri kössum þar sem gjafir verða 
                sendar út strax eftir helgina. 
                </span>
            </div>
            
            <div className='text-div flex flex-column'>
                <h2>Hvað er „Jól í skókassa“?</h2>
                <span>„Jól í skókassa“ er alþjóðlegt verkefni sem felst í því að fá börn 
                    jafnt sem fullorðna til þess að gleðja önnur börn sem lifa við fátækt, sjúkdóma og erfiðleika með því að gefa þeim jólagjafir. Með slíkum gjöfum er þeim sýndur kærleikur Guðs í verki. Gjafirnar eru settar í skókassa og til þess að tryggja að öll börnin fái svipaða jólagjöf er mælst til þess að ákveðnir hlutir séu í hverjum kassa.Fyrir jólin 2004 ákvað hópur ungs fólks innan KFUM & KFUK að láta reyna á verkefnið hér á landi. Undirtektirnar voru frábærar og söfnuðust rúmlega 500 kassar það árið. Verkefnið hélt svo áfram að spyrjast út og árið 2005 urðu skókassarnir 2600. Sú tala hefur síðan tvöfaldast því undanfarin ár hafa borist í kringum 5000 gjafir.</span>
            </div>
            <br />
            <div className='text-div'>
                <h2>Hvert fara skókassarnir?</h2>
                <span>Skókassarnir verða sendir til Úkraínu. Í Úkraínu búa um 46 milljónir manna. 
                    Atvinnuleysi er þar mikið og ástandið víða bágborið. Á því svæði þar sem jólagjöfunum 
                    verður dreift ríkir mikil örbirgð. Íslensku skókössunum verður meðal annars dreift á 
                    munaðarleysingjaheimili, barnaspítala og til barna einstæðra mæðra sem búa við sára fátækt. 
                    Kirkjan í Úkraínu er rússnesk rétttrúnaðarkirkja, en KFUM í Úkraínu starfar innan þeirrar 
                    kirkjudeildar. Aðalskipuleggjandi dreifingarinnar í Úkraínu er faðir Evheniy Zhabkovskiy 
                    sem komið hefur hingað til lands í heimsókn og m.a. kynnt sér starf KFUM og KFUK 
                    hér á landi.
                </span>
            </div>
            <br />
            <div className='text-div'>
                <h2>Afhverju þessi síða</h2>
                <span>
                    Þessi síða er gerð að því markmiði að einfalda skipulag og talningu fyrir 
                    þá starfsmenn sem sjá um flutningar á gjöfunum til Úkraínu. naðsynlegt er fyrir 
                    aðila sem taka á móti gjöfunum að vita hvað er í hverjum kassa. Markmiðið er að 
                    hafa allar upplýsingar sem tengjast gjöfunum aðgengilegar hér á vefnum. 
                    <h4>Til útskýringar hvernig talingarkerfið virkar:</h4>

                    Jólagjafir eru flokkaðar eftir aldri og kyni og geymdar í stærri kössum sem raðað
                    verður inn í flutninga gám. Þar eru 200-250 gjafir í hverjum kassa og rúmlega 20 
                    kassar í gám. Einnig er skráð niður hvenær gjöfum var bætt við í hvern kassa svo hægt
                    sé að fylgjast með hvort réttur fjöldi gjafa sé skráður.

                </span>
            </div>
           
            
        </div>
    );
};

export default HomePage;