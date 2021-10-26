import React from 'react';
import PropTypes from 'prop-types';
import { Text, Pressable, View, ViewPropTypes } from 'react-native';
import { Icon } from 'react-native-elements';
import SetOption from './SetOption';
import themeStyle from '../styles/theme.style';

export default function Set(props) {
    return (
        <View style={[styles.wrapper, props.style]}>
            <Pressable onPress={props.handleExpand}>
                <View
                    style={
                        props.expanded ? styles.headerExpanded : styles.header
                    }
                >
                    <Text style={styles.headerText}>
                        Set #{props.setNumber}
                    </Text>
                    <Icon
                        name={
                            props.expanded
                                ? 'keyboard-arrow-up'
                                : 'keyboard-arrow-down'
                        }
                    />
                </View>
            </Pressable>
            {props.expanded && (
                <View style={styles.body}>
                    <SetOption
                        style={styles.setOption}
                        title="Sprinting Duration (s)"
                        defaultValue={props.defaultSprintingDuration}
                        minValue={1}
                    />
                    <SetOption
                        style={styles.setOption}
                        title="Rest Duration (s)"
                        defaultValue={props.defaultRestDuration}
                        minValue={1}
                    />
                    <SetOption
                        style={styles.setOption}
                        title="Reps"
                        defaultValue={props.defaultReps}
                        minValue={1}
                    />
                </View>
            )}
        </View>
    );
}

Set.propTypes = {
    style: ViewPropTypes.style,
    handleExpand: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    setNumber: PropTypes.number.isRequired,
    defaultSprintingDuration: PropTypes.number.isRequired,
    defaultRestDuration: PropTypes.number.isRequired,
    defaultReps: PropTypes.number.isRequired,
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
    body: {
        display: 'flex',
    },
    setOption: {
        marginTop: 10,
    },
};
