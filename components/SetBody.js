import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import stylePropType from 'react-style-proptype';
import SetOption from './SetOption';

export default function SetBody(props) {
    console.log(props.options);
    return (
        <View style={[styles.body, props.style]}>
            {Object.entries(props.options).map(([key, value], index) => {
                // console.log(props.options);
                const optionRender = (
                    <SetOption
                        style={styles.setOption}
                        title={key}
                        key={index}
                        defaultValue={value}
                        minValue={0}
                    />
                );
                return optionRender;
            })}
        </View>
    );
}

SetBody.propTypes = {
    style: stylePropType,
    options: PropTypes.shape(PropTypes.number).isRequired,
};

SetBody.defaultProps = {
    style: {},
};
const styles = StyleSheet.create({
    body: {
        display: 'flex',
    },
    setOption: {
        marginTop: 10,
    },
});
