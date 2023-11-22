"use client";
import styles from "@/app/home/form.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";

export default function Formulario() {
	return (
		<div className={styles.main}>
			<FloatingLabel
				controlId="floatingInput"
				label="Email address"
				className="mb-3"
			>
				<Form.Control
					/* value={Email} */
					type="email"
					placeholder="name@example.com"
					/* onChange={(e) => {
						setEmail(e.target.value);
					}} */
				/>
			</FloatingLabel>
			<FloatingLabel controlId="floatingPassword" label="Password">
				<Form.Control
					/* value={Password} */
					type="password"
					placeholder="Password"
					/* onChange={(e) => {
						setPassword(e.target.value);
					}} */
				/>
			</FloatingLabel>
			<div className={styles.actions}>
				<Button /* onClick={loginuser} */ variant="primary">Login</Button>
			</div>
		</div>
	);
}
