import React from 'react';
import PropTypes from 'prop-types';
import { Text, Pressable, View, ViewPropTypes } from 'react-native';
import { Overlay } from 'react-native-elements';
import themeStyle from '../styles/theme.style';
import NumericInput from 'react-native-numeric-input';

export default function OptionChangerView(props) {
    const handleChange = (value) => {
        props.changeHandler(value);
    };

    return (
        <Overlay
            isVisible={props.isVisible}
            onBackdropPress={props.handleBackdropPress}
            style={[styles.wrapper, props.style]}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.description}>{props.description}</Text>
                <NumericInput
                    minValue={props.minValue}
                    value={props.value}
                    maxValue={props.maxValue}
                    onChange={handleChange}
                />
            </View>
        </Overlay>
    );
}

OptionChangerView.propTypes = {
    style: ViewPropTypes.style,
    isVisible: PropTypes.bool.isRequired,
    handleBackdropPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

OptionChangerView.defaultProps = {
    style: {},
    description: '',
};

const styles = {
    wrapper: {
        backgroundColor: themeStyle.color.almostWhite,
        padding: 15,
        borderRadius: themeStyle.layout.radiusMedium,
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
    },
    body: {
        display: 'flex',
    },
    description: {
        color: themeStyle.color.lightGray,
    },
};
