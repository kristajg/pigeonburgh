import { Option } from '../styles/styles';

export default function Inventory ({ inventory, toggleInventory }) {
	return (
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
}
