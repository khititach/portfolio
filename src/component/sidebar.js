import * as React from 'react'
import { useHistory } from 'react-router-dom';
import ProfileImage from '../image/af2.jpg'

function Sidebar () {
    const history = useHistory();
    return (
        <div className="sidebar">
            <div className="sidebar-img">
                <img src={ProfileImage} alt="profile"/>
            </div>
            <div className="sidebar-name" >
                KHiTiTACH
            </div>
            <div className="sidebar-btn">
                <button className="btn-sidebar" onClick={() => {history.push('/home')}}>
                    <div className="btn-sidebar-text" >
                        หน้าหลัก
                    </div>
                </button>
                <button className="btn-sidebar" onClick={() => {history.push('/about')}}>
                <div className="btn-sidebar-text" >
                        ข้อมูลส่วนตัว
                    </div>
                </button>
                <button className="btn-sidebar" onClick={() => {history.push('/education')}}>
                    <div className="btn-sidebar-text" >
                        การศึกษา
                    </div>
                </button>
                <button className="btn-sidebar" onClick={() => {history.push('/skill')}}>
                    <div className="btn-sidebar-text" >
                        ทักษะ
                    </div>
                </button>
                <button className="btn-sidebar" onClick={() => {history.push('/port')}}>
                    <div className="btn-sidebar-text" >
                        ผลงาน
                    </div>
                </button>
                {/* <button className="btn-sidebar" onClick={() => {history.push('/contact')}}>
                    <div className="btn-sidebar-text" >
                        CONTACT
                    </div>
                </button> */}
            </div>
            <div className="footer-sidebar" >
                <p>© KHiTiTACH 2020</p>
            </div>
        </div>
    )
}

export default Sidebar;