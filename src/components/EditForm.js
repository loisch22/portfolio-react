import React from 'react';
import { Link } from 'react-router-dom';

//Create form that displays content to About content portion
// Get input value, onChange have a function that updates the database
// On Save = update the database redirect to About page
// on Cancel = return to About

export default class EditForm extends React.Component {
    constuctor(props) {
        super(props);

        this.state = {
            content: props.content
        }
    }
    updateContent = (e) => {
        e.preventDefault();
        const content = e.target.value
        console.log(content);
        alert("saved");
    }

    render() {
        return (
            <div ref="edit">
                <h1>Edit About Content</h1>
                <form onSubmit={this.updateContent}>
                    <input type="text" 
                      placeholder="About content" 
                      autoFocus
                      value={this.state.content}
                    />
                    <button>Save</button>
                    <Link to="/about">Cancel</Link>
                </form>
            </div>
        );
    }
}