import styles from './main.module.css';
import logo from '../../img/png/logo.png'; 
import arrows from '../../img/svg/Group-303.svg';
import search from '../../img/svg/search.svg';
import lang from '../../img/png/lang.png'; 
import avatar_user from '../../img/png/avatar.png';
import icon_phone from '../../img/png/icon_phone.png';
import pic_main from '../../img/png/pic_main.png'
export default function MainComp(){
    return (
    <main>
      <header className={`${styles.header}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.header_logo}`}>
            <img src={logo} alt='logo'/>
            <p>GLOBAL
              <span> IT</span>
            </p>
          </div>    
          <ul className={`${styles.nav}`}>
            <li><a href='#'>Գլխավոր</a></li>
            <li>
              <a href='#'>Ծառայություններ</a>
              <img className={`${styles.arrows}`} src={arrows}/>
            </li>
            <li><a href='#'>Ֆակուլտետներ</a>
              <img className={`${styles.arrows}`} src={arrows}/>
            </li>
            <li><a href='#'>Բլոգ</a></li>
            <li><a href='#'>Gshop</a></li>
            <li><a href='#'>Կապ</a></li>
          </ul>
          <div className={`${styles.search_btn}`}>
            <img src={search}/>
          </div>
          <div className={`${styles.lang_btn}`}>
            <img src={lang}/>
            <img className={`${styles.arrows}`} src={arrows}/>
          </div>
          <div className={`${styles.avatar_user}`}>
            <img src={avatar_user}/>
          </div>
          <div className={`${styles.mode_color}`}>
            <div className={`${styles.circul_1}`}></div>
            <div className={`${styles.circul_2}`}></div>
            <div className={`${styles.mode_btn}`}></div>
          </div>
        </div>
        <div className={`${styles.main}`}>
          <div className={`${styles.frame}`}>
            <p>Եղիր առաջինը</p>
            <h1>Սովորիր<br></br>Ծրագրավորում</h1>
            <div className={`${styles.frame_a}`}>
              <a href='#'>Իմանալ ավելին</a>
            </div>
            <div className={`${styles.icon_phone}`}>
              <img src={icon_phone}/>
            </div>
          </div>
          <div className={`${styles.pic_main}`}>
            <img src={pic_main}/>
          </div>
        </div>
      </header>
      <section>
        <div className={`${styles.container}`}>

        </div>
      </section>
      <footer>
        <div className={`${styles.container}`}>

        </div>
      </footer>
    </main>
    )
}