import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
            src="https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/increase-traffic-to-your-website-social-media.jpg?Ts8_RwJBJqLLY.3ajHM5fyXJ5DeAPwmp&itok=6GC-0nMy" alt="" />
            <from className="writeForm">

                <div className="writeFormGroup">
                   <label htmlFor="fileInput">
                       <i className="writeIcon fas fa-plus"> </i>
                   </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="tell your story.." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </from>
        </div>
    )
}
