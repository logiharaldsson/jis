import React from 'react';

import AComponentTest from '../../components/a-component-test/a-component-test.component';
import ARisaKassi from '../../components/a-risa-kassi/a-risa-kassi.component';
import AVelduAldur from '../../components/a-veldu-aldur/a-veldu-aldur.component';

import './home-page.styles.scss';




import { signInWithGoogle } from '../../firebase/firebase.utils';

const HomePage = () => {

    return (
        <div className='home-page-div'>
            {/* <AComponentTest /> */}
            <p>Góðan dag. Þetta er talningakerfið fyrir jól í skókassa. <br /> Það er a.m.k. einn 'böggur' í kerfinu <br />Til að gögnin komi inn í byrjun er ýtt 2-3x á Tölfræði - þá detta gögnin inn og eiga vera út allt 'sessionið' </p>

            {/* <div onClick={signInWithGoogle}>Sign In with google</div> */}
        </div>
    );
};

export default HomePage;