import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ViewPropTypes } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import themeStyle from '../styles/theme.style';

export default function SetOption(props) {
    const [optionValue, setOptionValue] = useState(props.defaultValue);

    return (
        <View style={[styles.wrapper, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.numberInput}>
                <NumericInput
                    rounded
                    value={optionValue}
                    minValue={props.minValue}
                    // maxValue={props.maxValue}
                    onChange={(value) => setOptionValue(value)}
                />
            </View>
        </View>
    );
}

SetOption.propTypes = {
    style: ViewPropTypes.style,
    defaultValue: PropTypes.number,
    title: PropTypes.string.isRequired,
    minValue: PropTypes.number,
};

SetOption.defaultProps = {
    style: {},
    defaultValue: 0,
    minValue: 0,
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
};
