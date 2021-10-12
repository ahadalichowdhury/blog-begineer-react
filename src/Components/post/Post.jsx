import "./post.css"

function Post() {
    return (
        <div className="post">
            <img className="postImg"
            src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    
                </div>
                <span className="postTitle"> Lorem ipsum dolor sit amet.</span>
                <br />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ipsum modi cumque quo, iste repellendus earum voluptas iure nisi deleniti temquidem. Non, corrupti quaerat.</p>
        </div>
    )
}

export default Post
