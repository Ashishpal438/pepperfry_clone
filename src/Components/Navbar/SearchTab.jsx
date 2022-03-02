import styles from './SearchTab.module.css';

export default function SearchTab({handleRemoveSearch}){
    return (
        <div className={styles.cont} onMouseLeave={handleRemoveSearch}>
            <div>
                <h2>Trending Searches</h2>
                <ul className={styles.rec}>
                    <li>Study table</li>
                    <li>Chair</li>
                    <li>sofa cum bed</li>
                    <li>Sofa</li>
                    <li>table</li>
                    <li>mirror</li>
                    <li>shoe rack</li>
                    <li>Bed</li>
                    <li>Wardrobe</li>
                    <li>Swing</li>
                </ul>
            </div>

            <div>
                <h2>Most Searched</h2>
                <div>
                    <h3>Furniture</h3>
                    <div className={styles.Popsearch}>
                        <div>
                            <img width="70px" height="80px" src='data:image/png;base64,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'/>
                            <h5>Ergonomic Chairs</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIckDlQ6IWdujWnkBEqYITFhG06ZSbZJ9aDCRtFJLf9fKKJl0dMXv79EvTlEP25nB25kHX-rPCB174&usqp=CAc'/>
                            <h5>Sofas and Recliners</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8S2WQANVGGX89ECh8VQh1XA0NCGmce_UMllPm2L9HQVnGuak3Rcza07N1Ze9BSw&usqp=CAc'/>
                            <h5>Home Office</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlvBshKaMXLlE5hPKLiWafprDZsFH6pXTTkLfQe3_i4m-F2y1ZpCOiCUTOu0NodyFghj-LLxDltuc&usqp=CAc'/>
                            <h5>Office Chairs</h5>
                        </div>
            
                    </div>
                </div>

                <div>
                    <h3>Decore & Lights</h3>
                    <div className={styles.Popsearch}>
                        <div>
                            <img width="70px" height="80px" src='data:image/png;base64,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'/>
                            <h5>Ergonomic Chairs</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIckDlQ6IWdujWnkBEqYITFhG06ZSbZJ9aDCRtFJLf9fKKJl0dMXv79EvTlEP25nB25kHX-rPCB174&usqp=CAc'/>
                            <h5>Collecttables</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8S2WQANVGGX89ECh8VQh1XA0NCGmce_UMllPm2L9HQVnGuak3Rcza07N1Ze9BSw&usqp=CAc'/>
                            <h5>Hanging Lights</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlvBshKaMXLlE5hPKLiWafprDZsFH6pXTTkLfQe3_i4m-F2y1ZpCOiCUTOu0NodyFghj-LLxDltuc&usqp=CAc'/>
                            <h5>Modern and Contemporary Table Lamps</h5>
                        </div>
            
                    </div>
                </div>

                <div>
                    <h3>Mattress & Furnishings</h3>
                    <div className={styles.Popsearch}>
                        <div>
                            <img width="70px" height="80px" src='data:image/png;base64,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'/>
                            <h5>Bedding Sets</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIckDlQ6IWdujWnkBEqYITFhG06ZSbZJ9aDCRtFJLf9fKKJl0dMXv79EvTlEP25nB25kHX-rPCB174&usqp=CAc'/>
                            <h5>Cushion Covers</h5>
                        </div>
                        <div>
                            <img width="70px" height="80px" src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8S2WQANVGGX89ECh8VQh1XA0NCGmce_UMllPm2L9HQVnGuak3Rcza07N1Ze9BSw&usqp=CAc'/>
                            <h5>Foot Stools</h5>
                        </div>
            
                    </div>
                </div>
                
            </div>
        </div>
    )
}