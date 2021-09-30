import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LeftArrow from '../assets/images/interstellar-page/left_arrow.png';
import Pack from '../assets/images/interstellar-page/pack-1.png';
// import Subtraction from '../assets/images/interstellar-page/Subtraction.png';
// import SupremePack from '../assets/images/interstellar-page/supreme-pack.png';
import { Link } from 'react-router-dom';
import Brand from '../assets/images/char_brand.png';
import TimeLeft from '../assets/images/interstellar-page/clock-icon.png';
import DivideBar from '../assets/images/interstellar-page/divide-bar.png';

export default function CardShop() {

    return (
        <>
            <div className="card_shop_page">
                <Container fluid>
                    <Row>
                        <Col lg={4} className="cardShop_lft_col">
                            <div className="cardShop_page_lft">
                                <h2>Card Pack Introduction：</h2>
                                <ul>
                                    <li>Unlimited sales</li>
                                    <li>Random camp card for <span className="yellow">legendary</span>, <span className="blue">epic</span>, <span className="dodgerBlue">rare</span> and
                                        <span className="grey"> common</span> ( gold and silver cards are not included)
                                    </li>
                                    <li>A staking card and two gaming cards</li>
                                    <li>60% Card Opening Rate: <span className="yellow">Legendary</span> 5%, <span className="blue">Epic</span> 10%,
                                        <span className="dodgerBlue">Rare</span> 25%, <span className="grey">Common</span> 60%
                                    </li>
                                    <li>When the cards in the starship belong to the camp,
                                        you can receive a total combat power bonus for 5%
                                        buff.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1}>
                            <Image className="divide-bar" src={DivideBar} fluid/>
                        </Col>
                        <Col lg={7}>
                            <div className="cardShop_page_right">
                                <Col lg={12}>
                                    <h2>Spark Classical Pack</h2>
                                    <div className="cardShop_rightTop">
                                        <div className="">
                                            <Link to="/interstellar_trader_classical">
                                                <Image className="left_arrow_img" src={LeftArrow} fluid />
                                            </Link>
                                        </div>
                                        <div className="rightTop_para">Choose the number you want to purchase.</div>
                                    </div>
                                </Col>
                                <Row className="cs_left_side_div">
                                    {/* <div className="cs_left_side_div"> */}
                                    <Col lg={8}>
                                        <div className="cs_left_part1">
                                            <Row className="cardShop_pack_div">
                                                {/* <div className="cardShop_pack_div"> */}
                                                <Col lg={4}>
                                                    <Link to="/confirm_goods/package_1" className="pack_link">
                                                        <div className="pack_div">
                                                            <Image className="pack_img" src={Pack} />
                                                            <div className="bottom_div">
                                                                <div className="secOne">
                                                                    <span>1pack</span>
                                                                </div>
                                                                <div className="secTwo">
                                                                    <span className="quantity_num">10</span>
                                                                    <span className="u">U</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col lg={4}>
                                                    <Link to="/confirm_goods/package_2" className="pack_link">
                                                        <div className="pack_div">
                                                            <div className="quantity">x <span className="pack_number" id="txt_val" value="2">2</span></div>
                                                            <Image className="pack_img" src={Pack} />
                                                            <div className="bottom_div">
                                                                <div className="secOne">
                                                                    <span>2pack</span>
                                                                </div>
                                                                <div className="secTwo">
                                                                    <span className="quantity_num">20</span>
                                                                    <span className="u">U</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col lg={4}>
                                                    <Link to="/confirm_goods/package_6" className="pack_link">
                                                        <div className="pack_div">
                                                            <div className="quantity">x <span className="pack_number">6</span></div>
                                                            <Image className="pack_img" src={Pack} />
                                                            <div className="bottom_div">
                                                                <div className="secOne">
                                                                    <span>6pack</span>
                                                                </div>
                                                                <div className="secTwo">
                                                                    <span className="quantity_num">60</span>
                                                                    <span className="u">U</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                {/* </div> */}
                                            </Row>
                                            <Col lg={12}>
                                                <Link to="/confirm_goods/package_11" className="exclusive_href" href="javascript:;">
                                                    <div className="exclusive_pack_div">
                                                        <div className="exc_label">Send 1 Package</div>
                                                        <div className="exc_pac_top">
                                                            <div className="exc_pac_txtDiv">
                                                                Exclusive Package
                                                            </div>
                                                            <Image className="exc_pacImg" src={Pack} />
                                                            <div className="exc_pac_numDiv">
                                                                x  11
                                                            </div>
                                                        </div>
                                                        <div className="bottom_div">
                                                            <div className="secOne">
                                                                <span>10 Get 1 free</span>
                                                            </div>
                                                            <div className="secTwo">
                                                                <span className="quantity_num">100</span>
                                                                <span className="u">U</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>

                                            <Col lg={12}>
                                                <Link to="/confirm_goods/package_22" className="supreme_href">
                                                    <div className="supreme_pack_div">
                                                        <div className="exc_label">Send 2 Package</div>
                                                        <div className="sup_pac_top">
                                                            <div className="sup_pac_txtDiv">
                                                                Supreme Package
                                                            </div>
                                                            <div className="sup_pac_numDiv">
                                                                x 22
                                                            </div>
                                                        </div>
                                                        <div className="bottom_div">
                                                            <div className="secOne">
                                                                <span>20 Get 2 free</span>
                                                            </div>
                                                            <div className="secTwo">
                                                                <span className="quantity_num2">200</span>
                                                                <span className="u">U</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="cs_left_part2">
                                            <div className="cs_left_partDiv">
                                                <Image className="brand_bg" src={Brand} />
                                                <div className="cs_left_partPara">
                                                    <Image className="time_left" src={TimeLeft} />
                                                    <span>16 Days  12 Hours  45 Minutes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* </div> */}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

