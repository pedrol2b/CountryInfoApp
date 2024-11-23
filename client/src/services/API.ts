import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

class API {
  /* SINGLETON PATTERN */
  private static instance: API | null = null;

  private static readonly DEFAULT_TIMEOUT: number = 60000;
  private static readonly BASEURL: string = String(
    process.env.NEXT_PUBLIC_BASEURL
  );

  public readonly client: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.client = axios.create({
      ...config,
      timeout: API.DEFAULT_TIMEOUT,
      baseURL: API.BASEURL,
    });

    this.requestInterceptors();

    this.responseInterceptors();
  }

  private requestInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        throw error;
      }
    );
  }

  private responseInterceptors() {
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        throw error;
      }
    );
  }

  public static getInstance = (): API =>
    this.instance ?? (this.instance = new API());

  public getAPIClient = (): AxiosInstance => this.client;
}

export { API };
