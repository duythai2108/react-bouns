# Interview question
- Sự khác nhau giữa useState và useRef ?
usestate giup components re-render, ref thì không ...
-> `
  <div ref={divRef}></div>
  divRef.current.value
  divRef.current.style.backgroundColor
  document.querySelector('div')
` 
- useEffect hoạt động như thế nào ? Và nó dùng để làm gì ?
 -> Khi components mounted -> useEffect mới chạy, nó chạy clean up trước

- Khi làm việc với dropdown nằm trong tabble (có overflowscroll-auto) bị cut khi nội dung tràn ra ngoài, làm sao khi bấm vào dropdown vẫn xổ ra đầy đủ data, bạn sẽ làm thế nào
-> Sử dụng Portal, đưa phần DOM đó ra bên ngoài (nằm ngoài body luôn) giúp nó không phụ thuộc vào phần thử parents-> canh vị trí select dropdown bằng getBoundingClientRect
- Compound Component
- Truyeen dữ liệu giữa 2 components không liên quan với nhau
- Map,filter,reduce,forEach,some,every
- Usereducer -> dùng khi trường hợp state phức tạp
- Luyeejn tu duy logic : Leetcode, hackerrannk