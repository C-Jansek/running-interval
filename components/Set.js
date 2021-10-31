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
                    {props.setOptions.map((setOption) => (
                        <SetOption
                            style={styles.setOption}
                            title={
                                setOption.unit
                                    ? `${setOption.title} (${setOption.unit})`
                                    : setOption.title
                            }
                            key={setOption.title}
                            value={setOption.value}
                            minValue={setOption.minValue}
                            handlePress={() => setOption.handlePress(setOption)}
                        />
                    ))}
                    {/* <SetOption
                        style={styles.setOption}
                        title="Reps"
                        value={props.defaultReps}
                        minValue={1}
                    /> */}
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
    setOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Set.defaultProps = {
    style: {},
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
