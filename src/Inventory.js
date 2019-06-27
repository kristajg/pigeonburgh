import React from 'react';
import { Option } from './styles';

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

export default Inventory;
