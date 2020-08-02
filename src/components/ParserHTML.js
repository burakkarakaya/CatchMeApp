import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

/* 
    <ParserHTML html={`By registering you’re agreeing on the <i>terms and conditions</i>`} />
*/

function ParserHTML({ html, style }) {

    const parser = () => {

        html = html.split(/(<.*?>.*?<\/.*?>)/g);

        for (let i = 1; i < html.length; i += 2) {

            const word = html[i].replace(/<.*?>(.*?)<\/.*?>/, '$1'),
                tagName = html[i].match(/<([^\s>]+)(\s|>)+/)[1] || '',
                defTagStyle = styles[tagName] || {},
                tagStyle = style[tagName] || {};

            html[i] = <Text style={[styles.text, style.text, defTagStyle, tagStyle]} key={i}>{word}</Text>;
        }

        return html;
    };

    const _html = parser();

    return (
        <Text style={[styles.text, style.text]}>{_html}</Text>
    );
};

ParserHTML = React.memo(ParserHTML);

ParserHTML.defaultProps = {
    html: '',
    style: {},
};

ParserHTML.propTypes = {
    html: PropTypes.string,
    style: PropTypes.object,
};

const styles = StyleSheet.create({
    text: {

    },
    i: {
        textDecorationLine: 'underline'
    },
    b: {
        fontWeight: '600'
    }
});

export { ParserHTML };