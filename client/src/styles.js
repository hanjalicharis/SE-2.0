import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '20px auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'black',
        textDecoration: 'bolder',
    },
    image: {
        borderRadius: '50%',
        marginLeft: '15px',

    },
}));
