import { Configuration as devServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): devServerConfiguration {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	}
}