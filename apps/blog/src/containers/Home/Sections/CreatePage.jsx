import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'
import Firebase from "../../../firebase";
import QuillEditor from "../../../components/editor/QuillEditor";
import jsonPostsFile from "../../../posts.json"
import "../../Home/style.css";
import Sidebar from '../../../components/Sidebar/Sidebar';
import Hero from '../../../components/Hero/Hero';







/**
* @author
* @function CreatePage
**/

//  export const CreatePage = (props) => {

// const [content, setContent] = useState("");
// const [files, setFiles] = useState([]);


// const OnEditorChange = (value) => {
//     setContent(value);

// }

// const OnFilesChange = (files) => {
//     setFiles(files);
// }

// const onSubmit = (event) => {
//     event.preventDefault();

//     console.log(event)
//     setContent("");
//     postCreate();
//     jsonPostsFile.data.push(content);
// }





// const user = useSelector (state => state.currentUser);

// const { auth } = Firebase.getInstance();
//   const { currentUser } = auth;

// const postCreateFile = jsonPostsFile;
// if (Array.isArray (postCreateFile))
//     postCreateFile.data.body;


//   console.log(postCreateFile)

//  return (
//         <div>
//             <div style={{ maxWidt: '700px', margin: '2rem auto' }}>
//                 <div style={{ textAlign: 'center' }}>
//                     <h1>Editor</h1>
//                 </div>

//                     <form onSubmit={onSubmit}>
//                     <QuillEditor
//                 placeholder={"Start posting something"}
//                 onEditorChange={OnEditorChange}
//                 onFilesChange={OnFilesChange}     
//                 />
//                         <div style={{ textAlign: 'center', margin: '2rem' }}>
//                             <button type="submit" cursor="pointer" className="btn btn-primary btn-large">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>


export class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            // id: '',
            // userId: '',
            // title: '',
            // body: ''
        }
        // const postCreate = async (value) => {
        //     const POSTS_URL = "https://console.firebase.google.com/project/pannonians-blog/firestore/data/~2Fposts~2FFfqixAVpf5WiTID0t2Pv"
        //     const { data } = await axios.post(POSTS_URL, value);
        //     return data;
           
        // };

      

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(event)

    }



    handleSubmit(event) {
        alert('A post was submitted: ' + this.state.value);
        event.preventDefault();
        this.state.value.postCreate();
        
    }

    render() {
        return (
            <div className="form">
                <Hero />
                <form onSubmit={this.handleSubmit}>
                    <label for="area" >Create Post</label><br></br>
                    <textarea id="area" name="area" rows="8" cols="150" value={this.state.value} onChange={this.handleChange} /><br></br>

                    <input type="submit" value="Submit" />
                   
                </form>
                
            </div>

        );
    }



}


