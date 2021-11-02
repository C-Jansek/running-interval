import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Pressable, View } from 'react-native';
import stylePropType from 'react-style-proptype';
import { Icon } from 'react-native-elements';
import SetBody from './SetBody';
import Break from './Break';
import themeStyle from '../styles/theme.style';
import '../types/workout';

export default function Set(props) {
    if (props.type === 'break') {
        return (
            <Break
                style={props.style}
                title={props.title}
                duration={props.options.breakDuration}
            />
        );
    }

    const [expanded, setExpanded] = useState(false);

    return (
        <View style={[styles.wrapper, props.style]}>
            <Pressable onPress={() => setExpanded(!expanded)}>
                <View style={expanded ? styles.headerExpanded : styles.header}>
                    <Text style={styles.headerText}>{props.title}</Text>
                    <Icon
                        name={
                            expanded
                                ? 'keyboard-arrow-up'
                                : 'keyboard-arrow-down'
                        }
                    />
                </View>
            </Pressable>
            {expanded && <SetBody options={props.options} />}
        </View>
    );
}

Set.propTypes = {
    style: stylePropType,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.shape(PropTypes.number).isRequired,
};

Set.defaultProps = {
    style: {},
};

const styles = {
    wrapper: {
        backgroundColor: themeStyle.color.almostWhite,
        padding: 15,
        borderRadius: 8,
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerExpanded: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: '2px',
        borderBottomColor: themeStyle.color.lightGray,
    },
    headerText: {
        fontSize: 18,
    },
};
