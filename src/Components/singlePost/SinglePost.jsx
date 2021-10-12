import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhCFBqCf5-qPMMFaDRKYFNGSFaqAoLmCo5A&usqp=CAU" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>ahad</b></span>
                        <span className="singlePostDelete">1 hour Ago</span>
                    </div>
                    <p className="singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam a aperiam eum eveniet assumenda cumque deleniti perspiciatis magnam obcaecati id, perferendis veritatis tempora? Id saepe suscipit aliquam nulla quis sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate nihil tempora tempore qui pariatur accusamus odio ea neque culpa! Qui, vero voluptates quis a similique illo accusamus consequatur quia!.</p>
                </h1>
               
            
            </div>
        </div>
    )
}
