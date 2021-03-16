import styles from './main.module.css';
import logo from '../../img/png/logo.png'; 
import arrows from '../../img/svg/Group-303.svg';
import arrows2 from '../../img/svg/Group-4.svg';
import search from '../../img/svg/search.svg';
import lang from '../../img/png/lang.png'; 
import avatar_user from '../../img/png/avatar.png';
import icon_phone from '../../img/png/icon_phone.png';
import pic_main from '../../img/png/pic_main.png'
import banner1 from '../../img/svg/banner_icon1.svg';
import banner2 from '../../img/svg/banner_icon2.svg';
import banner3 from '../../img/svg/banner_icon3.svg';
import circul_1 from '../../img/svg/circul_1.svg';
import circul_background from '../../img/svg/circul_background.svg';
import circul_2 from '../../img/svg/circul_2.svg';
import circul_3 from '../../img/svg/circul_3.svg';
import circul_4 from '../../img/svg/circul_4.svg';


export default function MainComp(){
    return (
    <main>
      <header className={`${styles.header}`}>
        <div className={`${styles.container_head} `}>
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
          <div className={`${styles.header_right}`}>
            <div className={`${styles.search_btn}`}>
              <img src={search}/>
            </div>
            <div className={`${styles.lang_btn}`}>
              <img src={lang}/>
              <img className={`${styles.arrows2}`} src={arrows2}/>
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
        <div className={`${styles.container_section1}`}>
          <div className={`${styles.banners}`}>
            <div className={`${styles.banner1}`}>
              <img src={banner1}/>
            </div>
            <h3>Պրոֆեսիոնալ մոտեցում</h3>
            <p>Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն 
              բարձրորակ կրթությամբ և ծառայություններով։ Երկար 
              տարիների փորձը և բարձորակ աշխատանքային մոտեցումը կտա 
              իր արձյունքը։
              </p>
          </div>
          <div className={`${styles.banners}`}>
            <div className={`${styles.banners}`}>
                <div className={`${styles.banner1} ${styles.banner2}`}>
                  <img src={banner2}/>
                </div>
                <h3>Որակյալ աշխատանք</h3>
                <p className={`${styles.banner2_p}`}> Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է 
                բարձրորակ ծառայությունների մատուցում։ Եթե դուք 
                վստահել եք ձեր աշխատանքը մեր թիմին ապա կարող եք 
                վսահ լինել որ արձյունքը ձեզ կգոհացնի։
                </p>
            </div>
          </div>
          <div className={`${styles.banner3}`}>
            <div className={`${styles.banners}`}>
              <div className={`${styles.banners1}`}>
                  <div className={`${styles.banner1} ${styles.banner2}`}>
                    <img src={banner3}/>
                  </div>
                  <h3>Բարձրորակ կրթություն</h3>
                  <p className={`${styles.banner3_p}`}>Մեր մասնագետները 
                      ամեն ինչ կանեն, որ ձեզ ապահովեն
                      բարձրորակ կրթությամբ և ծառայություններով։
                      Երկար տարիների փորձը և բարձորակ
                      աշխատանքային մոտեցումը կտա իր արձյունքը։
                  </p>
              </div>
          </div>
          </div>
        </div>
        <div className={`${styles.slider_icons}`}>
          <div className={`${styles.slider_icon}`}></div>
          <div className={`${styles.slider_icon}`}></div>
          <div className={`${styles.slider_icon_selected}`}></div>
        </div>
      </section>
      <section>
        <div className={`${styles.container_section2}`}>
          <div><h1>Մեր մասին</h1></div>
          <div className={`${styles.circles_section2}`}>
            <div className={`${styles.circles_container1}`}>
              <div className={`${styles.circles_parent}`}>
                <img src={circul_background}/>
                <span>200</span>
                <div className={`${styles.circles_child}`}>
                  <img src={circul_1}/>
                </div>
              </div>
              <p>200 <br></br>հաջող մեկնարկված պռոեկտներ</p>
            </div>
            <div className={`${styles.circles_container2}`}>
              <div className={`${styles.circles_parent}`}>
                <img src={circul_background}/>
                <span>2017</span>
                <div className={`${styles.circles_child}`}>
                  <img src={circul_2}/>
                </div>
              </div>
              <p>Մենք շուկայում ենք 2017թ -ից</p>
            </div>
            <div className={`${styles.circles_container3}`}>
              <div className={`${styles.circles_parent}`}>
                <img src={circul_background}/>
                <span>250</span>
                <div className={`${styles.circles_child}`}>
                  <img src={circul_3}/>
                </div>
              </div>
              <p>Ավելի քան 250 գոհ հաճախորդ</p>
            </div>
            <div className={`${styles.circles_container4}`}>
              <div className={`${styles.circles_parent}`}>
                <img src={circul_background}/>
                <span>124</span>
                <div className={`${styles.circles_child}`}>
                  <img src={circul_4}/>
                </div>
              </div>
              <p>Մենաք ունենք 124 ավարտած աշակերներ </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className={`${styles.container}`}>

        </div>
      </footer>
    </main>
    )
}