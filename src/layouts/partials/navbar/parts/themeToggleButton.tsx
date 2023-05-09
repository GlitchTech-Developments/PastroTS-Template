import { signal } from "@preact/signals";

import { Moon, Sun } from "lucide-preact";

const currentThemeSignal = signal("dark");

const ThemeToggle = () => {
	const currentTheme = currentThemeSignal.value;

	if (localStorage.getItem("theme")) {
		const currentTheme = String(localStorage.getItem("theme"));
		currentThemeSignal.value = currentTheme;
	}

	const setThemeToggle = () => {
		const htmlRoot = document.querySelector("html");

		if (!htmlRoot) {
			return;
		}

		if (currentTheme == "light") {
			currentThemeSignal.value = "dark";
			htmlRoot.dataset.theme = "dark";
		} else {
			currentThemeSignal.value = "light";
			htmlRoot.dataset.theme = "light";
		}
	};

	return (
		<>
			<div class="inline-block">
				<button
					class="btn btn-base-100 rounded-btn transition-all duration-300 ease-in-out p-2"
					onClick={setThemeToggle}
				>
					<span class="m-auto text-3xl">{currentTheme == "dark" ? <Sun /> : <Moon />}</span>
				</button>
			</div>
		</>
	);
};
export default ThemeToggle;
