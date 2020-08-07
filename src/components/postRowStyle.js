

const PostRowStyle = (record, index) => {
    if(index % 2==0)
        return ({
            backgroundColor: 'white',
        });
    else
        return ({
            backgroundColor: '#efe',
        });
}

export default PostRowStyle;