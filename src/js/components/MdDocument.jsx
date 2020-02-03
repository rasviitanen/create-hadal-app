import React from "react";
import marked from "marked";
import { Hadal } from "hadal";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },

    compiled: {
        height: "100%",
        width: "50%",

        display: "inline-block",
        verticalAlign: "top",
        boxSizing: "border-box",

        padding: "2%",
    },

    input: {
        height: "100%",
        width: "50%",

        border: "none",
        borderRight: "1px solid #ccc",
        resize: "none",
        outline: "none",
        backgroundColor: "#f6f6f6",
        boxSizing: "border-box",

        padding: "2%",
    },
});


let mdDoc = (dir, name) => Hadal.Crate({
	route: dir + '/' + name,

	data: {
		name: name,
		input: ''
    },
})

class MdDocument extends React.Component {
    constructor(props) {
        super(props);

        this.doc = mdDoc('some', 'doc');

        this.doc.onChange = function(oldData, newData) {
            Hadal.metadata().then(meta => console.log(meta.pool.rtc));
            this.setState({ ...this.state, input: newData.input });
        }.bind(this)

        this.state = {
            input: this.doc.data.input
        };

        this.update = this.update.bind(this);
        this.getMarkdownText = this.getMarkdownText.bind(this);
    }

    getMarkdownText() {
        var rawMarkup = marked(this.doc.data.input);
        return { __html: rawMarkup };
    };

    update(event) {
        this.doc.data.input = event.target.value;
    };

    render() {
      return (
        <div id="editor" className={css(styles.container)}>
            <textarea
                className={css(styles.input)}
                value={ this.state.input }
                onChange={ this.update }
            ></textarea>
            <div
                className={css(styles.compiled)}
                dangerouslySetInnerHTML={ this.getMarkdownText() }
            ></div>
        </div>
      );
    }
};

export default MdDocument;