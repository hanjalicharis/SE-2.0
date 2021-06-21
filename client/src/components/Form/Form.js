import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();


    const clear = () => {

        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });

    }

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(updatePost({ ...postData, name: user?.result?.name }));
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        clear();
    }


    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please log in or register!
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
                < Typography variant="h6"> {currentId ? 'Edit your' : 'Create a new'} Hanjary </Typography>
                <TextField id="title" name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField id="tags" name="tags" variant="outlined" label="Tags (with ,)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button id="SubmitMemory" className={classes.buttonSubmit} style={{ color: 'white' }} size="large" type="submit" fullWidth>Submit memory</Button>
                <Button className={classes.buttonDelete} style={{ color: 'red' }} size="large" fullWidth onClick={clear}>Clear memory</Button>
            </form>
        </Paper >
    );
}

export default Form;
