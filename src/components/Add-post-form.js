import axios from "axios";
import React from "react";


function AddPostForm ( props ) {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        
        const post = {
            'postTitle': e.target.title.value,
            'postContent': e.target.content.value,
            
        };
        await axios.post(
            `https://white-board-back.herokuapp.com/post`,
            post
        ).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Title</label>
                        <input type="text" placeholder="Add Title" name="title" />
                    </div>
                    <div className="form-control">
                        <label>Content</label>
                        <textarea placeholder="Add Post content" name="content"></textarea>
                    </div>
                    <div className="form-control">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddPostForm;