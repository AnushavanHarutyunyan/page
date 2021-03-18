import styles from './main.module.css';
import logo from '../../img/png/logo.png'; 
import arrows from '../../img/svg/Group-303.svg';
import arrows2 from '../../img/svg/Group-4.svg';
import search from '../../img/svg/search.svg';
import lang from '../../img/png/lang.png'; 
import avatar_user from '../../img/png/avatar.png';
import icon_phone from '../../img/png/icon_phone.png';
import pic_main from '../../img/png/pic_main.png';
import banner1 from '../../img/svg/banner_icon1.svg';
import banner2 from '../../img/svg/banner_icon2.svg';
import banner3 from '../../img/svg/banner_icon3.svg';
import circul_1 from '../../img/svg/circul_1.svg';
import circul_background from '../../img/svg/circul_background.svg';
import circul_2 from '../../img/svg/circul_2.svg';
import circul_3 from '../../img/svg/circul_3.svg';
import circul_4 from '../../img/svg/circul_4.svg';
import pic_section3 from '../../img/png/pic_section3.png';
import pattern1 from '../../img/png/pattern1.png';
import pattern2 from '../../img/png/pattern2.png';
import play_btn from '../../img/svg/play_btn.svg';
import background_facultet1 from '../../img/png/background_facultet1.png';
import background_facultet2 from '../../img/png/background_facultet2.png';
import background_facultet3 from '../../img/png/background_facultet3.png';
import emblem_facultety1 from '../../img/svg/emblem_facultety1.svg';
import emblem_facultety2 from '../../img/svg/emblem_facultety2.svg';
import emblem_facultety3 from '../../img/svg/emblem_facultety3.svg';
import group2 from '../../img/png/group2.png';
import user2 from '../../img/png/user2.png';
import date2 from '../../img/png/date2.png';
import star16 from '../../img/png/star16.png';
import star19 from '../../img/png/star19.png';
import icon_facultety_dev from '../../img/png/icon_facultety_dev.png';
import icon_facultety_web from '../../img/png/icon_facultety_web.png';
import icon_facultety_mult from '../../img/png/icon_facultety_mult.png';
import code_developmen1 from '../../img/png/code_developmen1.png';
import code_developmen2 from '../../img/png/code_developmen2.png';
import code_developmen3 from '../../img/png/code_developmen3.png';
import code_developmen4 from '../../img/png/code_developmen4.png';
import code_developmen5 from '../../img/png/code_developmen5.png';
import code_developmen6 from '../../img/png/code_developmen6.png';
import arrow_big from '../../img/svg/arrow_big.svg';
import microsoft_logo1 from '../../img/png/microsoft_logo1.png';
import microsoft_logo2 from '../../img/png/microsoft_logo2.png';
import banner_web1 from '../../img/png/banner1.png';
import banner_web2 from '../../img/png/banner2.png';
import facebook_logo from '../../img/svg/facebook_logo.svg';
import instagram_logo from '../../img/svg/instagram_logo.svg';
import twitter_logo from '../../img/svg/twitter_logo.svg';
import linkedin_logo from '../../img/svg/linkedin_logo.svg';

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
      <section className={`${styles.section1}`}>
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
      <section className={`${styles.section2}`}>
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
      <section className={`${styles.section3}`}>
        <div className={`${styles.container_section3}`}>
          <div className={`${styles.about_us}`}>
            <h1>Մեր մասին կարճ տեսանյութ</h1>
            <p>Դիտելով այս հոլովակը դուք կստանաք ձեր բոլոր
                հարցերի պատասխանները
            </p>
            <img src={pic_section3}/>
          </div>
          <div className={`${styles.pattern_section3}`}>
              
              <img src={pattern1}/>
              <div className={`${styles.pattern2}`}>
                <img src={pattern2}/>
              </div>
              <div className={`${styles.play_btn}`}>
              <div><img src={play_btn}/></div>
              </div>
            
          </div>
        </div>
      </section>
      <section className={`${styles.section4}`}>
        <div className={`${styles.container_section2}`}>  
          <div>
            <div><h1>Ֆակուլտետներ</h1></div>
          </div>
          <div className={`${styles.faculty}`}>
            <div className={`${styles.facult_dev}`}>
                <img src={emblem_facultety1} className={`${styles.facult_dev_prog_log}`}/>
                <div className={`${styles.facult_dev_option_sales}`}>
                  <p>-45% զեղչ</p>
                </div>
                <img src={background_facultet1} className={`${styles.background_facultet2}`}/>
                <div>
                  <h1>Վեբ ծրագրավորման</h1>
                </div>
                <h3>Ֆակուլտետ</h3>  
                <img src={icon_facultety_web} className={`${styles.facult_dev_img}`}/>
                <div className={`${styles.facult_dev_options}`}>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Front end</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Back end</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Full stack</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facultet_btn}`}>
                    <a href='#'>Իմանալ ավելին</a>
                  </div>
                </div>
            </div>
            <div className={`${styles.facult_dev}`}>
                <img src={emblem_facultety2} className={`${styles.facult_dev_prog_log}`}/>
                <div className={`${styles.facult_dev_option_sales}`}>
                  <p>-45% զեղչ</p>
                </div>
                <img src={background_facultet2} className={`${styles.background_facultet2}`}/>
                <h1>Ծրագրավորման</h1>
                <h3>Ֆակուլտետ</h3>
                <img src={icon_facultety_dev} className={`${styles.facult_dev_img}`}/>
                <div className={`${styles.facult_dev_options}`}>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Front end</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Back end</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Full stack</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                </div>
                <div className={`${styles.facultet_btn}`}>
                  <a href='#'>Իմանալ ավելին</a>
                </div>
            </div>
            <div className={`${styles.facult_dev}`}>
                <img src={emblem_facultety3} className={`${styles.facult_dev_prog_log}`}/>
                <div className={`${styles.facult_dev_option_sales}`}>
                  <p>-45% զեղչ</p>
                </div>
                <img src={background_facultet3} className={`${styles.background_facultet2}`}/>
                <h1>Մուլտիմեդիայի</h1>
                <h3>Ֆակուլտետ</h3>
                <img src={icon_facultety_mult} className={`${styles.facult_dev_img}`}/>
                <div className={`${styles.facult_dev_options}`}>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Front end</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Back end</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facult_dev_option}`}>
                    <p>Full stack</p>
                    <p className={`${styles.facult_dev_option_p2}`}>25% զեղչ</p>
                  </div>
                  <div className={`${styles.facultet_btn}`}>
                  <a href='#'>Իմանալ ավելին</a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section5}`}>
        <div className={`${styles.container_section5}`}>
          <div className={`${styles.section5_h1}`}>
            <h1>Դասընթացներ</h1>
          </div>
          <div className={`${styles.lessons}`}>
            <div>
                <div className={`${styles.lesson}`}>
              <div className={`${styles.lesson_1}`}>

              </div>
            </div>
            <div className={`${styles.lesson_about_gruop}`}>
              <div className={`${styles.lesson_about1}`}>
                <div><h3>Front-end</h3></div>
                  <div>
                    <div><h2>ծրագրավորում</h2></div>
                    <div><p>Վեբ ծրագրավորումը ներկայումս աշխատաշուկայում 
                    ամենապահանջված մասնագիտություններից է։ Այն բաժանվում է 
                    2 հիմնական մասնագիտացումների՝ Front-End և Back-End 
                    ծրագրավորում, որոնցից յուրաքանչյուրն ունի...</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.lessons_about2}`}>
                  <div className={`${styles.lessons_about2_group}`}>
                    <img src={group2}/>
                    <span>3-5 անձ</span>
                  </div>
                  <div className={`${styles.lessons_about2_group}`}>
                    <img src={user2}/>
                    <span>1-2 անձ</span>
                  </div>
                  <div className={`${styles.lessons_about2_group}`}>
                    <img src={date2}/>
                    <span>4-6 ամիս</span>
                  </div>
                  <div className={`${styles.lesson_stars}`}>
                    <div><img src={star16}/></div>
                    <div><img src={star16}/></div>
                    <div><img src={star16}/></div>
                    <div><img src={star19}/></div>
                    <div><img src={star19}/></div>
                  </div>
                </div>
            </div>
            <div className={`${styles.lessons_btn_gruop}`}>
              <div className={`${styles.lessons_btn_gruop_div1}`}>
                <a href='#'><span>Դիմել</span></a>
                </div>
              <div className={`${styles.lessons_btn_gruop_div2}`}>
                <div><a href='#'><span>Ուս․ ծրագիր</span></a></div>
              </div>
            </div>
          </div>
          
          </div>
          
        </div>
      </section>
      <section className={`${styles.section6}`}>
        <div className={`${styles.container_section5}`}>
          <div className={`${styles.section5_h1}`}>
            <h1>Ծառայություններ</h1>
          </div>
          <div className={`${styles.section6_services_gruop}`}>
            <div className={`${styles.section6_services_block}`}>
              <div className={`${styles.section6_services_block_option}`}>
                <p>Վեբ Կայքերի պատրաստում</p>
                <div className={`${styles.section6_services_block_option_btn}`}>
                  <a href='#'><span>Պատվիրել</span></a>
                </div>
              </div>
              <div className={`${styles.section6_services_block_icon1}`}>
                <img src={code_developmen1} />
              </div>
            </div>
            <div className={`${styles.section6_services_block}`}>
              <div className={`${styles.section6_services_block_option}`}>
                <p>Բջջային հավելվածներ</p>
                <div className={`${styles.section6_services_block_option_btn}`}>
                  <a href='#'><span>Պատվիրել</span></a>
                </div>
              </div>
              <div className={`${styles.section6_services_block_icon1}`}>
                <img src={code_developmen2} />
              </div>
            </div>
          </div>
          <div className={`${styles.section6_services_gruop}`}>
          <div className={`${styles.section6_services_block}`}>
              <div className={`${styles.section6_services_block_option}`}>
                <p>Համակարչային հավելվածներ</p>
                <div className={`${styles.section6_services_block_option_btn}`}>
                  <a href='#'><span>Պատվիրել</span></a>
                </div>
              </div>
              <div className={`${styles.section6_services_block_icon1}`}>
                <img src={code_developmen3} />
              </div>
            </div>
            <div className={`${styles.section6_services_block}`}>
              <div className={`${styles.section6_services_block_option}`}>
                <p>Բջջային և համ․խաղեր</p>
                <div className={`${styles.section6_services_block_option_btn}`}>
                  <a href='#'><span>Պատվիրել</span></a>
                </div>
              </div>
              <div className={`${styles.section6_services_block_icon1}`}>
                <img src={code_developmen4} />
              </div>
            </div>
          </div>
          <div className={`${styles.section6_services_gruop}`}>
            <div className={`${styles.section6_services_block}`}>
              <div className={`${styles.section6_services_block_option}`}>
                <p>Վեբ և գրաֆիկ դիզայն</p>
                <div className={`${styles.section6_services_block_option_btn}`}>
                  <a href='#'><span>Պատվիրել</span></a>
                </div>
              </div>
              <div className={`${styles.section6_services_block_icon1}`}>
                <img src={code_developmen5} />
              </div>
            </div>
            <div className={`${styles.section6_services_block}`}>
              <div className={`${styles.section6_services_block_option}`}>
                <p>ՍԵՈ և ՍՄՄ առաջխաղացում</p>
                <div className={`${styles.section6_services_block_option_btn}`}>
                  <a href='#'><span>Պատվիրել</span></a>
                </div>
              </div>
              <div className={`${styles.section6_services_block_icon1}`}>
                <img src={code_developmen6} />
              </div>
            </div>
          </div>
          <div className={`${styles.section6_services_arrow}`}>
              <img src={arrow_big}/>
            </div>
        </div>
      </section>
      <section className={`${styles.section7}`}>
        <div className={`${styles.container_section7}`}>
          <div className={`${styles.container_section7_h1}`}>
            <h1>Մեր գործընկերները</h1>
          </div>
          <div className={`${styles.container_section7_about_us_group}`}>
            <div className={`${styles.container_section7_about_us_group_block}`}>
              <img src={microsoft_logo1} />
            </div>
            <div className={`${styles.container_section7_about_us_group_block}`}>
              <img src={microsoft_logo2} />
            </div>
            <div className={`${styles.container_section7_about_us_group_block}`}>
              <img src={microsoft_logo1} />
            </div>
            <div className={`${styles.container_section7_about_us_group_block}`}>
              <img src={microsoft_logo1} />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section8}`}>
        <div className={`${styles.container_section8}`}>
          <div className={`${styles.container_section8_h1}`}>
            <h1>Մեր աշխատանքները</h1>
          </div>
          <div className={`${styles.container_section8_banner_group}`}>
              <div className={`${styles.container_section8_banner}`}>
                <img src={banner_web1} />
                <div className={`${styles.lessons_btn_gruop_div2} ${styles.btn_margin}`}>
                  <div><a href='#'><span>Տեսնել կայքը</span></a></div>
                </div>
              </div>
            <div className={`${styles.container_section8_banner} ${styles.container_section8_banner_margin}`}>
              <img src={banner_web2} />
              <div className={`${styles.lessons_btn_gruop_div2} ${styles.btn_margin}`}>
                <div><a href='#'><span>Տեսնել կայքը</span></a></div>
              </div>
            </div>
          </div>
          <div className={`${styles.slider_icons}`}>
            <div className={`${styles.slider_icon}`}></div>
            <div className={`${styles.slider_icon}`}></div>
            <div className={`${styles.slider_icon_selected}`}></div>
          </div>
        </div>
      </section>
      <section className={`${styles.section9}`}>
        <div className={`${styles.container_section9}`}>
          <div className={`${styles.container_section9_subc_group}`}>
            <p className={`${styles.container_section9_subc_p}`}>Բաժանորդագրվել</p>
            <div className={`${styles.container_section9_subc_email_btn}`}>
              <p>E-mail</p>
            </div>
            <div>
              <div className={`${styles.container_section9_subc_send_btn}`}>
                <a><span>Ուղարկել</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section10}`}>
        <div className={`${styles.container_section10}`}>
          <div className={`${styles.about_office}`}>
            <div className={`${styles.header_logo} ${styles.logo_margin}`}>
            <img src={logo} alt='logo'/>
            <p>GLOBAL
              <span> IT</span>
            </p>
          </div>
            <p className={`${styles.about_office_p}`}>
              ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի
              19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք 
              ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է 
              մեծացնել Ձեր բիզնեսի շահութաբերությունը և նպաստել 
              աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է 
              նորարարական լուծումներ, որոնք նպաստում են Ձեր 
              բիզնեսի թիրախային լսարանի ներգրավմանը:
            </p>
            <div className={`${styles.logo_social}`}>
              <div><img src={facebook_logo}/></div>
              <div><img src={twitter_logo}/></div>
              <div><img src={instagram_logo}/></div>
              <div><img src={linkedin_logo}/></div>
            </div>
          </div>
          <div className={`${styles.office_lessons}`}>
            <h3>Դասընթացներ</h3>
            <p>Վեբ ծրագրավորում Ծրագրավորում Մուլտիմեդիա Նախագծեր
                Անվճար դասընթացներ Այլ Դասընթացներ
            </p>
          </div>
          <div className={`${styles.h3_group}`}>
            <h3>Նախագծեր</h3>
            <h3>Աշխատանք</h3>
            <h3>Մեր մասին</h3>
          </div>
          <div className={`${styles.address}`}>
            <h4>Հասցեներ</h4>
            <p>Ք. Երևան Ալեք Մանուկլյան15ա (Հյուսիսային Համալսարան) 
                ք. Էջմիածին  Գ․ Լուսավորիչ համալսարան 2հ․ 41,47 սեն․
                ք․ Աբովյան 6-րդ դպրոց, գ․ Արամուսի Մշակույթի տուն
                ք․ Չարենցավան 6-րդ դպրոց ք․ Սևան 5-րդ դպրոց
                Հեռախոսահամարներ <br></br>Էլ․ հասցե +374 95 355 255 gitedu@bk.ru
                +374 98 960 959 <br></br>globalit@gitedu.am
              </p>
          </div>
          
        </div>
        <div className={`${styles.d_block}` }>
          <hr className={`${styles.d_block_hr}` }></hr>
          <div>
            <p>
              Copyright ©2020 Բոլոր հեղինակային իրավունքները 
              պաշտպանված են: |  Կայքը պատրաստված է "ԳԼՈԲԱԼ ԻՏ" 
              (ՍՊԸ)-ի կողմից, որը հանդիսանում է ընկերության 
              Պաշտոնական կայքէջը: Կայքից նույթ տեղադրելիս հղումը
              gitedu.am-ին պարտադիր է:
            </p>
          </div>
        </div>
      </section>
      <footer>
      </footer>
    </main>
    )
}