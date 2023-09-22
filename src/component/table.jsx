import { TableWrapper } from "./style";

const Table = ({
  columns,
  dataSource,
  rowKey,
  type,
  showShadow,
  handleRowClick,
  selectedRowIndex,
  showSelectedRowIndex,
  scroll,
  bgTableColor,
  bgTableHeaderColor,
}) => (
  <TableWrapper
    type={type}
    showShadow={showShadow}
    scroll={scroll}
    bgTableColor={bgTableColor}
    bgTableHeaderColor={bgTableHeaderColor}
  >
    <div className="first-table thin_scrollbar_gray">
      <table>
        <thead>
          <tr>
            {columns.map((heading) => (
              <th
                style={{
                  width: heading?.width
                    ? heading.width
                    : `${100 / columns?.length}%`,
                  textAlign: heading?.align || "left",
                  padding: heading?.headSpace
                    ? `${heading?.headSpace}px`
                    : "8px",
                }}
                key={heading.key}
              >
                {heading?.title}
              </th>
            ))}
          </tr>
        </thead>
        {dataSource?.length > 0 && (
          <tbody>
            {dataSource.map((row, rowIndex) => (
              <tr key={row[rowKey]}>
                {columns.map((column) => (
                  <td
                    style={{
                      padding: column?.headSpace
                        ? `${column?.headSpace}px`
                        : "1rem",
                      textAlign: column?.textAlign || "left",
                      width: column?.width
                        ? `${column?.width}px`
                        : `${100 / columns?.length}%`,
                    }}
                    key={`${row[rowKey]}-${column.key}`}
                    className={column?.className ? column.className : ""}
                  >
                    {column?.render
                      ? column.render(row, rowIndex, dataSource)
                      : row[column?.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>

    {/* {!dataSource?.length && (
      <div className="empty_Tablewrapper">
        <Empty />
      </div>
    )} */}
  </TableWrapper>
);

export default Table;
