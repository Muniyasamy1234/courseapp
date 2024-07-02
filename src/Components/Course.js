import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { IoIosApps } from "react-icons/io";
import { IoCode } from "react-icons/io5";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiDesktopFill } from "react-icons/pi";
import { VscGithubProject } from "react-icons/vsc";

const Course = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/course")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [data]);


    const getImg = (name) => {
        switch (name) {
            case "Basic Algorithm":
                return <IoIosApps className='icon1' />
            case "Web Development":
                return <IoCode className='icon2' />
            case "Basic Data Science":
                return <AiOutlineAppstoreAdd className='icon3' />
            case "UI/UX Design":
                return <PiDesktopFill className='icon4' />
            case "Project Management":
                return <VscGithubProject className='icon5' />
            default:
                return null
        }
    }
    return (
        <div className='table'>
            <div className='course'>
                <h3>Mycourse</h3>
                <h3 className='view'>View All</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Start Date</th>
                        <th>Lesson Completed</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(x => (
                            <tr>
                                <td className='two'>
                                    <div className='one'>
                                        {getImg(x.name)}
                                    </div>
                                    <div className='lesson'>
                                    {x.name}
                                    <p>{x.lesson}</p>
                                    </div>
                                </td>
                                <td>{x.data}</td>
                                <td>{x.lCompleted}</td>
                                <td>{x.duration}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Course