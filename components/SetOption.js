import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, Text, View, ViewPropTypes } from 'react-native';
import themeStyle from '../styles/theme.style';

export default function SetOption(props) {
    return (
        <View style={[styles.wrapper, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
            <Pressable style={styles.numberInput} onPress={props.handlePress}>
                <Text>{props.value}</Text>
            </Pressable>
        </View>
    );
}

SetOption.propTypes = {
    style: ViewPropTypes.style,
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    handlePress: PropTypes.func,
};

SetOption.defaultProps = {
    style: {},
    handlePress: undefined,
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        color: themeStyle.color.mediumGray,
    },
    numberInput: {
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeStyle.color.darkWhite,
        color: themeStyle.color.mediumGray,
        padding: 5,
        borderRadius: themeStyle.layout.radiusSmall,
    },
};
