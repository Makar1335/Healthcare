import './block.scss'
import Search from "../../components/Search/search";
import User from '../../components/img/images.png';
import '../../components/img/images.png';
import Cell from '../../components/img/77682.png';
import firstAurKit from '../../components/img/firstAurKit.png';
import Card from '../../components/Cards/card';
import Crutch from '../../components/img/crutch.png';
import Operation from '../../components/img/operation.png';
import Bank from '../../components/img/bank.png'

import Ronald from '../../components/img/01.svg'
import Jane from '../../components/img/02.svg'
import Jenny from '../../components/img/03.svg'
import Robert from '../../components/img/05.svg'
import Leslie from '../../components/img/Leslie.svg'


import Table1 from '../../components/table/table';
import RechartsExampleMain from '../../components/charts/Char_Main'
import RechartsExample1 from '../../components/charts/Chart_1'
import RechartsExample2 from '../../components/charts/Chart_2'

import Login from '../login/login';

function Block1() {
    
    return (
        <div className="block">
            <div className="all-block">
                <div className="header">
                    <Search />
                    <div className="img-header">
                        <img src={Cell}></img>
                        <img src={User} ></img>
                    </div>
                </div>

                <div className="cards-block">
                    <Card img={firstAurKit} text="Appointments" numder="213" />
                    <Card img={Crutch} text="New Patients" numder="104" />
                    <Card img={Operation} text="Operations" numder="24" />
                    <Card img={Bank} text="Hospital Earnings" numder="&#36; 12,174" />
                </div>

            <div className='all-charts'>
                <RechartsExampleMain/>
                <div className='One-Two-charts'>
                    <RechartsExample1/>
                    <RechartsExample2/>
                </div>
            </div>

             <Table1 
             Avatar1={Leslie} Name1="Leslie Alexander" Email1="lesie.alexander@example.com" Date1="10/10/2020" Visit1="09:15-09:45am" Doctor1="Dr. Jacob Jones" Conditions1="Mumps Stage II" 
             Avatar2={Ronald} Name2="Ronald Richards" Email2="ronald.richards@example.com" Date2="10/12/2020" Visit2="12:00-12:45pm" Doctor2="Dr. Theresa Webb" Conditions2="Depression" 
             Avatar3={Jane} Name3="Jane Cooper" Email3="jane.cooper@example.com" Date3="10/13/2020" Visit3="01:15-01:45pm" Doctor3="Dr. Jacob Jones" Conditions3="Arthritis" 
             Avatar4={Robert} Name4="Robert Fox" Email4="robert.fox@gmail.com" Date4="10/14/2020" Visit4="02:00-02:45pm" Doctor4="Dr. Arlene McCoy" Conditions4="Fracture"
             Avatar5={Jenny} Name5="Jenny Wilson" Email5="jenny.wilson@example.com" Date5="10/15/2020" Visit5="12:00-12:45pm" Doctor5="Dr. Esther Howard" Conditions5="Depression"/>

            </div>

        {/* <Login/> */}
        </div>
    );
}

export default Block1;