import React, { useState, useEffect } from 'react';

export function Header() {
    return (
                <div className="container-fluid pb-3 bg-primary d-flex justify-content-between">
                    <h3 className="text-white mt-3 w-25 d-inline">
                        Stopwatch
                    </h3>
                    <button type="button" class="d-inline btn btn-light mt-3" onClick={() => alert('Nothing happened')}>
                        Empty
                    </button>
                </div>
            )
}