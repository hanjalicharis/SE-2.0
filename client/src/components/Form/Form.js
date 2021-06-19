import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        }
        else {
            dispatch(createPost(postData));
        }

        clear();

    }

    const clear = () => {

        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
                < Typography variant="h6"> {currentId ? 'Edit your' : 'Create a new'} Hanjary </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (with ,)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} style={{ color: 'white' }} size="large" type="submit" fullWidth>Submit memory</Button>
                <Button className={classes.buttonDelete} style={{ color: 'red' }} size="large" fullWidth onClick={clear}>Clear memory</Button>
            </form>
        </Paper >
    );
}

export default Form;
