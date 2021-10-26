import React from 'react';
import PropTypes from 'prop-types';
import { Text, Pressable, View, ViewPropTypes } from 'react-native';

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
    style: ViewPropTypes.style,
    duration: PropTypes.number.isRequired,
};

Break.defaultProps = {
    style: {},
};

const styles = {
    wrapper: {
        backgroundColor: '#444',
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
        color: '#f5f5f5',
    },
};
