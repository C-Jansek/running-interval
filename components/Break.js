import React from 'react';
import PropTypes from 'prop-types';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import stylePropType from 'react-style-proptype';
import themeStyle from '../styles/theme.style';

export default function Break(props) {
    return (
        <View style={[styles.wrapper, props.style]}>
            <Pressable>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Break</Text>
                    <Text style={styles.headerText}>{props.duration}s</Text>
                </View>
            </Pressable>
        </View>
    );
}

Break.propTypes = {
    style: stylePropType,
    duration: PropTypes.number.isRequired,
};

Break.defaultProps = {
    style: {},
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: themeStyle.color.darkGray,
        padding: 15,
        borderRadius: 8,
        width: '70%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        color: themeStyle.color.almostWhite,
    },
});
