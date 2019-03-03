import React, { Component } from 'react';

import InternshipCard from './InternshipCard'

import testData2 from './../../../test_data';
class CardGroup extends Component {
	render() {
		return (
            <React.Fragment>
                {testData2.map((applicationData, index) => {
                    return (
                        <InternshipCard key={index} applicationData={applicationData} selectCard={this.props.selectCard}></InternshipCard>
                    );
                })}
            </React.Fragment>
		);
	}
}

export default CardGroup;
