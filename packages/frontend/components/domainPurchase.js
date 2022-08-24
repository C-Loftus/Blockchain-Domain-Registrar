import { useMoralis } from "react-moralis";
import React, { useEffect, useState } from "react";
const GITHUB_LINK = "https://github.com/C-Loftus";

const tld = '.usa';

export default function PurchaseForm() {
    const {chainId: chainIdHex, isWeb3Enabled} = useMoralis();

    const [domain, setDomain] = useState('');
    const [record, setRecord] = useState('');

    return (
			<div className="form-container">
				<div className="first-row">
					<input
						type="text"
						value={domain}
						placeholder='domain'
						onChange={e => setDomain(e.target.value)}
					/>
					<p className='tld'> {tld} </p>
				</div>

				<input
					type="text"
					value={record}
					placeholder='whats ur ninja power'
					onChange={e => setRecord(e.target.value)}
				/>

				<div className="button-container">
					<button className='cta-button mint-button' disabled={null} onClick={null}>
						Mint
					</button>  
					<button className='cta-button mint-button' disabled={null} onClick={null}>
						Set data
					</button>  
				</div>

			</div>
		);
}
// 1752
