import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSourceList = createAsyncThunk(
  "healthMonitor/fetchSourceList",
  async (timeOption) => {
    const response = await axios.get(
      `${window.ENV.REC_DASH_API}/snowplow/source/${timeOption}`
    );
    return response.data;
  }
);

export const getValidateList = createAsyncThunk(
  "healthMonitor/fetchValidateList",
  async (timeOption) => {
    const response = await axios.get(
      `${window.ENV.REC_DASH_API}/snowplow/validate/${timeOption}`
    );
    return response.data;
  }
);

export const getEnrichList = createAsyncThunk(
  "healthMonitor/fetchEnrichList",
  async () => {
    const response = await axios.get(
      `${window.ENV.REC_DASH_API}/snowplow/enrich`
    );
    return response.data;
  }
);

export const getDestinationList = createAsyncThunk(
  "healthMonitor/fetchDestnationList",
  async (timeOption) => {
    const response = await axios.get(
      `${window.ENV.REC_DASH_API}/snowplow/dest/${timeOption}`
    );
    return response.data;
  }
);
