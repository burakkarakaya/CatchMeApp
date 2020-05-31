
import React, { useState } from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

/*
const CustomModal = React.memo(() => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={toggleModal} />

            <Modal
                swipeDirection={['down']}
                isVisible={isModalVisible}
            >
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    );
});*/

const CustomModal = React.memo(() => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const scrollViewRef = React.useRef();

    const [scrollOffset, setScrollOffset] = useState();

    const handleOnScroll = event => {
        setScrollOffset(event.nativeEvent.contentOffset.y);
    };

    const handleScrollTo = (p) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={toggleModal} />


            <Modal
                testID={'modal'}
                isVisible={isModalVisible}
                onSwipeComplete={toggleModal}
                swipeDirection={['down']}
                scrollTo={handleScrollTo}
                scrollOffset={scrollOffset}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                propagateSwipe={true}
                style={styles.modal}>
                <View style={styles.scrollableModal}>
                    <ScrollView
                        ref={scrollViewRef}
                        onScroll={handleOnScroll}
                        scrollEventThrottle={16}>
                        <View style={styles.scrollableModalContent1}>
                            <Text style={styles.scrollableModalText1}>
                                You can scroll me up! 👆
              </Text>
                        </View>
                        <View style={styles.scrollableModalContent2}>
                            <Text style={styles.scrollableModalText2}>
                                Same here as well! ☝
              </Text>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

        </View>
    );
});



export { CustomModal };


const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
});



/*const Modal = () => {
    return (
        <Modal
            testID={'modal'}
            isVisible={this.isVisible()}
            onSwipeComplete={this.close}
            swipeDirection={['down']}
            scrollTo={this.handleScrollTo}
            scrollOffset={this.state.scrollOffset}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
            style={styles.modal}>
            <View style={styles.scrollableModal}>
                <ScrollView
                    ref={this.scrollViewRef}
                    onScroll={this.handleOnScroll}
                    scrollEventThrottle={16}>
                    <View style={styles.scrollableModalContent1}>
                        <Text style={styles.scrollableModalText1}>
                            You can scroll me up! 👆
                </Text>
                    </View>
                    <View style={styles.scrollableModalContent2}>
                        <Text style={styles.scrollableModalText2}>
                            Same here as well! ☝
                </Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}*/