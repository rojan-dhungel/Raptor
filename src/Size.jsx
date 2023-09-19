import React from 'react'

function Size() {
    return (
        <>

            <div className="container" id='size'>
                <h1>International Size Guide</h1>
                <p>This guide is intended to help you find the right size clothing for your body. Please note that sizes may vary between brands, so it is always best to try on clothing before purchasing.</p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Size</th>
                            <th>US Size</th>
                            <th>UK Size</th>
                            <th>EU Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>United States</td>
                            <td>2</td>
                            <td>4</td>
                            <td>6</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>United Kingdom</td>
                            <td>6</td>
                            <td>8</td>
                            <td>10</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>European Union</td>
                            <td>34</td>
                            <td>36</td>
                            <td>38</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Japan</td>
                            <td>M</td>
                            <td>L</td>
                            <td>XL</td>
                            <td>XXL</td>
                        </tr>
                        <tr>
                            <td>China</td>
                            <td>160</td>
                            <td>165</td>
                            <td>170</td>
                            <td>175</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Size
