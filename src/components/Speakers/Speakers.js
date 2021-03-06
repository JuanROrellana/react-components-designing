import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import SpeakerSearchBar from "../SpeakerSearchBar/SpeakerSearchBar";
import Speaker from '../Speaker/Speaker';

import {GET_ALL_SUCCESS, GET_ALL_FAILURE, PUT_FAILURE, PUT_SUCCESS, SPEAKER_URL} from "../../actions/request";

export default function Speakers()  {
    const REQUEST_STATUS = {
        LOADING: 'loading',
        SUCCESS: 'success',
        ERROR: 'error',
    };

    const [searchQuery, setSearchQuery] = useState('');

    const reducer = (state, action) => {
        switch (action.type){
            case GET_ALL_SUCCESS:
                return {
                    ...state,
                    status: REQUEST_STATUS.SUCCESS,
                    speakers: action.speakers
                };
            case GET_ALL_FAILURE:
                return {
                    ...state,
                    status: REQUEST_STATUS.ERROR,
                    error : action.error
                };
            case PUT_SUCCESS:
                return {
                    ...state,
                    error: action.error
                };
            case PUT_FAILURE:
                return {
                    ...state,
                    error: action.error
                };
            default:
                return state;
        }
    };

    const [{speakers, status}, dispatch] = useReducer(reducer, {
        status: REQUEST_STATUS.LOADING,
        speakers: []
    });

    const [error, setError] = useState({});

    function toggleSpeakerFavorite(speakerRec) {
        return {
            ...speakerRec,
            isFavorite: !speakerRec.isFavorite,
        };
    }

    async function onFavoriteToggleHandler(speakerRec) {
        const toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);
        const speakerIndex = speakers
            .map((speaker) => speaker.id)
            .indexOf(speakerRec.id);

        try {
            await axios.put(
                SPEAKER_URL`+/${speakerRec.id}`,
                toggledSpeakerRec,
            );
            dispatch([
                ...speakers.slice(0, speakerIndex),
                toggledSpeakerRec,
                ...speakers.slice(speakerIndex + 1),
            ]);
        } catch (e) {
            dispatch({
                TYPE: PUT_FAILURE,
                STATUS: REQUEST_STATUS.ERROR
            });
            setError(e);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(SPEAKER_URL);
                dispatch({
                    speakers: response.data,
                    type: GET_ALL_SUCCESS
                });
            } catch (e) {
                dispatch({
                    status: REQUEST_STATUS.ERROR,
                    type: GET_ALL_FAILURE
                })
                setError(e);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <SpeakerSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                {speakers
                    .filter((rec) => {
                        const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
                        return searchQuery.length === 0
                            ? true
                            : targetString.includes(searchQuery.toLowerCase());
                    })
                    .map((speaker) => (
                        <Speaker key={speaker.id} {...speaker} onFavoriteToggle={() => onFavoriteToggleHandler(speaker)} />
                    ))}
            </div>
        </div>
    )
}
