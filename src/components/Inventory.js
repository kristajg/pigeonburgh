// React & third party libaries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Option } from '../styles';

const Inventory = ({ inventory, toggleInventory }) => (
	<div>
		<h3>Inventory</h3>
		<ul>
			{inventory.map(item => {
				return (
					<li key={item.itemId}>
						<span>Name: {item.name}</span>
						<br />
						<span>Description: {item.description}</span>
					</li>
				);
			})}
		</ul>
		<Option onClick={() => toggleInventory()}>Close Inventory</Option>
	</div>
);

Inventory.propTypes = {
	inventory: PropTypes.array.isRequired,
	toggleInventory: PropTypes.func.isRequired,
};

export default Inventory;
