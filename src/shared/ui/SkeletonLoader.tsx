export const SkeletonLoader = ({
  width = '100%',
  height = '100%',
  margin = '0',
}) => {
  return (
    <div
      className='skeleton-loader'
      style={{
        width: width,
        height: height,
        margin: margin,
      }}
    ></div>
  );
};
