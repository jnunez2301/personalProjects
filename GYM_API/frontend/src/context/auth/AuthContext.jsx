/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

// Create a context
const AuthContext = createContext();

// Define initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
};

// Define actions
const ACTIONS = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
};

// Create a reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        loading: false,
      };
    case ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Effect to fetch authentication status
  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get('/api/auth/status');
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      } catch (error) {
        dispatch({
          type: ACTIONS.FETCH_FAILURE,
          payload: {
            error: error.message || 'An error occurred while fetching authentication status.',
          },
        });
      }
    };

    fetchAuthStatus();
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
