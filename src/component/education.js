import * as React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from './sidebar'
import PrimarySchoolImage from '../image/TPV Logo.webp'
import HighSchoolImage from '../image/highSchool.png'
import UniversityImage from '../image/800px-Naresuanuniversitylogo.png'
function Education () {
    const SchoolData = {
        primarySchool:{
            img:PrimarySchoolImage,
            SchoolName:'โรงเรียนทองประสาทเวทย์',
            Degree:'ระดับประถมศึกษา'
        },
        HighSchool:{
            img:HighSchoolImage,
            SchoolName:'โรงเรียนหนองฉางวิทยา',
            Degree:'ระดับมัธยมศึกษา'
        },
        University:{
            img:PrimarySchoolImage,
            SchoolName:'มหาวิทยาลัยนเรศวร',
            Degree:'ระดับปริญญาตรี',
            Faculty:'คณะวิศวกรรมศาสตร์',
            FacultyOf:'สาขาวิชาวิศวกรรมคอมพิวเตอร์'
        }
    }
    const history = useHistory()
    return (
        <>
        <div className="App-init">
            {/* <Sidebar /> */}
    
            <Sidebar />
            <div className="App-info education" >
                <label className="education-header-text" >ประวัติการศึกษา</label>
                <div className="education-data"> 
                    <div className="education-data-text">
                        <div className="primary-school">
                            <div className="row">
                                <div className="col-4 primary-school-img school-img">
                                    <img src={PrimarySchoolImage} className="primary-school-image" alt="profile"/>
                                </div>
                                <div className="col-8 school-data school-img">
                                    <p>{SchoolData.primarySchool.Degree}</p>
                                    <p>{SchoolData.primarySchool.SchoolName}</p>
                                </div>
                            </div>
                           
                           
                        </div>
                        <div className="high-school">
                            <div className="row">
                                <div className="col-4 high-school-img school-img">
                                    <img src={HighSchoolImage} className="high-school-image" alt="profile"/>
                                </div>
                                <div className="col-8 school-data school-img">
                                    <p>{SchoolData.HighSchool.Degree}</p>
                                    <p>{SchoolData.HighSchool.SchoolName}</p>
                                </div>
                            </div>
                        </div>
                        <div className="university">
                            <div className="row">
                                <div className="col-4 university-img school-img">
                                    <img src={UniversityImage} className="university-image" alt="profile"/>
                                </div>
                                <div className="col-8 school-data school-img">
                                    <p>{SchoolData.University.Degree}</p>
                                    <p>{SchoolData.University.SchoolName}</p>
                                    <p>{SchoolData.University.Faculty}</p>
                                    <p>{SchoolData.University.FacultyOf}</p>
                                </div>
                            </div>
                        </div>
            
                  
                    </div>
                    
                </div>
            </div>
            {/* <Sidebar /> */}
        </div>
        <div className="btn-back-mb">
            <button className="btn-back" onClick={() => {history.goBack()}}>Back</button>
        </div>
      
        
        </>
    )
}

export default Education;