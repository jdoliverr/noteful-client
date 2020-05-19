import React, { Component } from 'react';

class SingleFolder extends Component {
    render() {
        return (
            <>
                <div className="note-container">
                    <a href="/note" className="note-link">Note 1</a>
                    <div className="note-bottom">
                        <div className="note-mod">Date modified</div>
                        <button className="note-delete">Delete Note</button>
                    </div>
                </div>
                <div className="note-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos natus distinctio repudiandae, enim nam deleniti vitae placeat id soluta reprehenderit quaerat tempora autem dicta itaque similique, voluptatibus hic neque.</p>
                </div>
            </>
        )
    }
}

export default SingleFolder;


