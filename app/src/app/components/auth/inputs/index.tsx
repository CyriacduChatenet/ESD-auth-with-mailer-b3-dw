import { FC } from 'react';

interface IProps {
	confirmPassword: boolean;
	label: string;
}

export const AuthInputs: FC<IProps> = ({ confirmPassword = false, label }) => {
	return (
		<>
			<label htmlFor="">
				Email
				<input type="email" name="email" placeholder="Email" />
			</label>
			<label htmlFor="">
				Password
				<input type="password" name="password" placeholder="Password" />
			</label>
			{confirmPassword ? (
				<label htmlFor="">
					Confirm Password
					<input type="password" name="confirmPassword" placeholder="Confirm password" />
				</label>
			) : null}
			<input type="submit" value={label} />
		</>
	);
};
